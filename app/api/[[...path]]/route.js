import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let client; let db;
async function getDb() {
  if (db) return db;
  client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  db = client.db(process.env.DB_NAME || 'plumber_template');
  return db;
}

function cors(json, init = {}) {
  return NextResponse.json(json, {
    ...init,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', ...(init.headers || {}) },
  });
}

export async function OPTIONS() { return cors({}); }

export async function GET(req, { params }) {
  const path = (params?.path || []).join('/');
  if (!path) return cors({ ok: true, service: 'plumber-template', timestamp: new Date().toISOString() });
  if (path === 'health') return cors({ ok: true });
  return cors({ error: 'not_found', path }, { status: 404 });
}

export async function POST(req, { params }) {
  const path = (params?.path || []).join('/');
  let body = {};
  try { body = await req.json(); } catch {}

  try {
    const database = await getDb();

    if (path === 'contact') {
      const required = ['name','phone'];
      for (const k of required) if (!body[k]) return cors({ error: `missing_${k}` }, { status: 400 });
      const doc = {
        id: uuidv4(),
        type: 'contact',
        name: String(body.name || '').slice(0, 120),
        phone: String(body.phone || '').slice(0, 40),
        email: String(body.email || '').slice(0, 200),
        service: String(body.service || '').slice(0, 80),
        message: String(body.message || '').slice(0, 2000),
        createdAt: new Date().toISOString(),
      };
      await database.collection('leads').insertOne(doc);
      return cors({ ok: true, id: doc.id });
    }

    if (path === 'book') {
      const required = ['name','phone','service'];
      for (const k of required) if (!body[k]) return cors({ error: `missing_${k}` }, { status: 400 });
      const doc = {
        id: uuidv4(),
        type: 'booking',
        name: String(body.name || '').slice(0, 120),
        phone: String(body.phone || '').slice(0, 40),
        email: String(body.email || '').slice(0, 200),
        address: String(body.address || '').slice(0, 240),
        service: String(body.service || '').slice(0, 80),
        urgency: String(body.urgency || 'standard').slice(0, 40),
        preferredDate: String(body.preferredDate || '').slice(0, 40),
        preferredTime: String(body.preferredTime || '').slice(0, 40),
        notes: String(body.notes || '').slice(0, 2000),
        createdAt: new Date().toISOString(),
      };
      await database.collection('leads').insertOne(doc);
      return cors({ ok: true, id: doc.id });
    }

    if (path === 'newsletter') {
      const email = String(body.email || '').trim();
      if (!email) return cors({ error: 'missing_email' }, { status: 400 });
      await database.collection('newsletter').insertOne({ id: uuidv4(), email, createdAt: new Date().toISOString() });
      return cors({ ok: true });
    }

    return cors({ error: 'not_found', path }, { status: 404 });
  } catch (err) {
    return cors({ error: 'server_error', message: String(err?.message || err) }, { status: 500 });
  }
}
