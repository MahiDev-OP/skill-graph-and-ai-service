import { NextResponse } from 'next/server';
import pool from '@/lib/db';
export async function GET() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users ORDER BY id ASC');
        client.release();

        return NextResponse.json({ users: result.rows });
    } catch (error) {
        console.error('DB error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}