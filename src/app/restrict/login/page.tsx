"use client"

import { FormEvent, useState } from "react";
import Button from "@/app/components/button/button.component"
import Select from "@/app/components/select/select.component";
import Input from "@/app/components/input/input.component";
import Textarea from "@/app/components/textarea/textarea.component";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  return (
    <div className="h-screen w-full flex bg-slate-900">
      <div className="w-1/2 min-h-full flex flex-col items-center justify-center">
        <form className="w-full flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full flex flex-col gap-4">
            <Input
              id="email"
              name="email"
              size="sm"
              required
              placeholder="email"
              type="email"
              color="primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />

            <Input
              id="password"
              name="password"
              size="sm"
              required
              placeholder="password"
              type="password"
              color="primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />

            <Select
              id="accountType"
              name="accountType"
              size="sm"
              required
              placeholder="accountType"
              color="primary"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              variant="outlined"
              options={[
                {label:'Fornecedor', value: 'partiner'},
                {label:'Noivos', value: 'fiance'},
                {label:'Administradores', value: 'admin'},
              ]}
            />

            <Textarea
              id="message"
              name="message"
              size="sm"
              required
              placeholder="message"
              color="primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
            />

          </div>
          <div className="w-full flex flex-col gap-4">
            <Button id="login" type="submit" label="Login" size="xs" color="primary" variant="filled" fullScreen/>
            <Button id="register" type="button" label="Register" size="xs" color="primary" variant="outlined" fullScreen />
          </div>
        </form>
      </div>

      <div className="w-1/2 min-h-full bg-white flex flex-col items-center justify-center">
        
      </div>
    </div>
  )
}