import { db } from '@/app/lib/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import React from 'react'

export async function GET() {
    const snapshot = await getDocs(collection(db, "tasks"));
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json(tasks);
}

export async function POST(req: Request){
 try{
  const body = await req.json();
  const NewTaskRef = await addDoc(collection(db, 'tasks'),{
    title: body.title,
    description: body.description || '',
    completed: false,
    priority: body.priority || "medium",
    createAt: new Date(),
    updateAt: new Date(),
  })
  return NextResponse.json({
    id:NewTaskRef.id,
    title: body.title,
    description: body.description || "",
    completed: false,
    priority: body.priority || "medium",
    createAt: new Date(),
    updateAt: new Date(),
  });
 } catch (error) {
  console.log('POST /api/tasks error:', error);
  return NextResponse.json({ error: "failed to add task"}, {status: 500});
 }
}
