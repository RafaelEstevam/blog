'use server'
 
import { cookies } from 'next/headers'
 
async function create() {
  cookies().set('name', 'lee')
  cookies().set('name', 'lee', { secure: true })
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
}