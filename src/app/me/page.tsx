const Page = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start">
            <div className="w-full lg:w-2/3 flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl text-center font-bold">Rafael Estevam de Oliveira</h1>
                    <p className="text-2xl text-center">Engenheiro de software com foco no Front-end</p>
                    <p className="text-center">São José dos Campos - São Paulo</p>
                </div>

                <div className="gap-10 rounded-2xl bg-slate-700 p-10">
                    <p>
                        Profissional com formação em Banco de Dados e especialização em desenvolvimento Front-end, demonstrando habilidades
em tecnologias proeminentes como React, NextJS e Tailwind. Buscando oportunidades como Desenvolvedor Frontend Sênior para aplicar conhecimentos
e experiências, contribuindo para o crescimento profissional e auxiliando no atingir os objetivos definidos pela equipe.
                    </p>
                </div>

                <div className="flex w-full gap-4">
                    <div className="md:w-1/2 flex flex-col gap-10 items-end">
                        <h2 className="text-5xl font-bold">Graduação</h2>
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-10 flex-row-reverse">
                                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                                <div className="flex flex-col items-end">
                                    <h3 className="font-bold text-2xl">Banco de dados</h3>
                                    <p>2018 - 2022</p>
                                    <p className="text-right">FATEC - Faculdade de tecnologia de SP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold">&</h2>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <h2 className="text-5xl font-bold">Experiência</h2>
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-10">
                                <div className="w-10 h-10 bg-slate-700"></div>
                                <div>
                                    <h3 className="font-bold text-2xl">Printi</h3>
                                    <p>2023 - até o presente momento</p>
                                    <p>Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p>Suporte e manutenção de aplicações web desenvolvidas com NextJS. Desenvolvimento de funcionalidades e integrações de API para aplicações web.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl">FITec</h3>
                                    <p>2021 - 2023</p>
                                    <p>Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p>Desenvolvimento de aplicações web com React. Desenvolvimento e suporte de aplicações web para conversas em tempo real entre clientes e parceiros (Chat), integrando soluções como WebSocket. Suporte e manutenção de sistemas web baseados em React.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl">Gauge</h3>
                                    <p>2019 - 2021</p>
                                    <p>Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p>Desenvolvimento de aplicações web com React. Criação de websites utilizando WordPress. Suporte e manutenção de websites desenvolvidos no WordPress.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl">Univalle Sistemas</h3>
                                    <p>2017 - 2019</p>
                                    <p>Desenvolvedor Front-end</p>
                                    <div>
                                        <p>Desenvolvimento de aplicações web com AngularJS. Criação de design (UX/UI) para aplicações web.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 bg-slate-700"></div>
                                <div>
                                    <h3 className="font-bold text-2xl">Freelancer</h3>
                                    <p>2015 - até o presente momento</p>
                                    <div>
                                        <p>Desenvolvimento de aplicações web, websites e consultoria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl text-center font-bold">Conhecimentos</h2>
                    <p className="text-center">Conhecimentos adquiridos ao longo dos anos de experiência e estudos acadêmicos</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="p-10 flex justify-center bg-slate-700 rounded-2xl">
                            <p>React</p>
                        </div>
                        <div className="p-10 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Next.JS</p>
                        </div>
                        <div className="p-10 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Javascript</p>
                        </div>
                        <div className="p-10 flex justify-center bg-slate-700 rounded-2xl">
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Redux</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Zustand</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Tailwind</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Typescript</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Material UI</p>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Bootstrap</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Storybook</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Wordpress</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>NodeJS</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>GraphQL</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-4">
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>PostgreSQL</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>MongoDB</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Cypress</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Docker</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Git</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Photoshop</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Illustrator</p>
                        </div>
                        <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                            <p>Figma</p>
                        </div>
                        <p>Em progresso...</p>
                    </div>
                    
                </div>
                
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl text-center font-bold">Línguas</h2>
                    <p className="text-center">Português - Nativo</p>
                    <p className="text-center">Inglês - Intermediário (em progresso)</p>
                </div>
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                        <div className="bg-slate-700 rounded-2xl p-4">
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                            <p>asdfasd</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
};

export default Page;