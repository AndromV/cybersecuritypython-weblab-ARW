const path = require('node:path');
const { mkdir, appendFile } = require('node:fs/promises');
const { randomUUID } = require('node:crypto');
const fastify = require('fastify')({
  logger: true,
  bodyLimit: 10 * 1024
});
const fastifyStatic = require('@fastify/static');

const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_DIR = path.join(__dirname, 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.jsonl');

fastify.register(fastifyStatic, {
  root: PUBLIC_DIR
});

fastify.post('/api/contact', async (request, reply) => {
  const body = request.body;

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return reply.code(400).send({ ok: false, error: 'Request body must be a JSON object.' });
  }

  const { name, email, subject, message, rating } = body;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return reply.code(400).send({ ok: false, error: 'Name, email, subject, and message must be strings.' });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
    return reply.code(400).send({ ok: false, error: 'All text fields are required.' });
  }

  if (cleanName.length > 100 || cleanEmail.length > 150 || cleanSubject.length > 200 || cleanMessage.length > 2000) {
    return reply.code(400).send({ ok: false, error: 'One or more fields exceed maximum allowed length.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return reply.code(400).send({ ok: false, error: 'A valid email address is required.' });
  }

  if (typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return reply.code(400).send({ ok: false, error: 'Rating must be an integer between 1 and 5.' });
  }

  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
    rating
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(FEEDBACK_FILE, JSON.stringify(record) + '\n', 'utf8');

    return reply.code(201).send({
      ok: true,
      message: 'Feedback saved locally.',
      id: record.id
    });
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ ok: false, error: 'Internal Server Error.' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
