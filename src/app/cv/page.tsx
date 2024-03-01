const Page = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start">
            <div className="w-full lg:w-2/3 flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-6xl text-center font-bold">Rafael Estevam de Oliveira</h1>
                    <p className="text-white text-2xl text-center">Engenheiro de software com foco no Front-end</p>
                    <p className="text-white text-center">São José dos Campos - São Paulo</p>
                </div>

                <div className="gap-10 rounded-2xl bg-slate-700 p-10">
                    <p className="text-white">
                        Profissional com formação em Banco de Dados e especialização em desenvolvimento Front-end, demonstrando habilidades
em tecnologias proeminentes como React, NextJS e Tailwind. Buscando oportunidades como Desenvolvedor Frontend Sênior para aplicar conhecimentos
e experiências, contribuindo para o crescimento profissional e auxiliando no atingir os objetivos definidos pela equipe.
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-10 md:gap-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-10 items-start md:items-end">
                        <h2 className="text-5xl font-bold text-white">Graduação</h2>
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-10 md:flex-row-reverse">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div className="flex flex-col md:items-end">
                                    <h3 className="font-bold text-2xl text-white">Superior em Banco de dados</h3>
                                    <p className="text-white">08/2018 - 07/2022</p>
                                    <p className="text-white text-right">FATEC - Faculdade de tecnologia de SP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="hidden md:block text-5xl font-bold">&</h2>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-10">
                        <h2 className="text-5xl font-bold text-white">Experiência</h2>
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-10">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl text-white">Printi</h3>
                                    <p className="text-white">06/2023 - até o presente momento</p>
                                    <p className="text-white">Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p className="text-white">Suporte e manutenção de aplicações web desenvolvidas com NextJS. Desenvolvimento de funcionalidades e integrações de API para aplicações web.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl text-white">FITec</h3>
                                    <p className="text-white">02/2021 - 06/2023</p>
                                    <p className="text-white">Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p className="text-white">Desenvolvimento de aplicações web com React. Desenvolvimento e suporte de aplicações web para conversas em tempo real entre clientes e parceiros (Chat), integrando soluções como WebSocket. Suporte e manutenção de sistemas web baseados em React.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl text-white">Gauge</h3>
                                    <p className="text-white">02/2019 - 02/2021</p>
                                    <p className="text-white">Engenheiro Front-end Pleno</p>
                                    <div>
                                        <p className="text-white">Desenvolvimento de aplicações web com React. Criação de websites utilizando WordPress. Suporte e manutenção de websites desenvolvidos no WordPress.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl text-white">Univalle Sistemas</h3>
                                    <p className="text-white">01/2017 - 02/2019</p>
                                    <p className="text-white">Desenvolvedor Front-end</p>
                                    <div>
                                        <p className="text-white">Desenvolvimento de aplicações web com AngularJS. Criação de design (UX/UI) para aplicações web.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="w-10 h-10 min-w-10 bg-slate-700 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-2xl text-white">Freelancer</h3>
                                    <p className="text-white">01/2015 - até o presente momento</p>
                                    <div>
                                        <p className="text-white">Desenvolvimento de aplicações web, websites e consultoria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl text-center font-bold text-white">Conhecimentos</h2>
                        <p className="text-center text-white">Conhecimentos adquiridos ao longo dos anos de experiência e estudos acadêmicos</p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                            <div className="p-5 md:p-10 border-4 border-blue-600 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">React</p>
                            </div>
                            <div className="p-5 md:p-10 border-4 border-blue-600 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Next.JS</p>
                            </div>
                            <div className="p-5 md:p-10 border-4 border-blue-600 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Javascript</p>
                            </div>
                            <div className="p-5 md:p-10 border-4 border-blue-600 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">HTML/CSS</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-5 gap-4">
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Redux</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Zustand</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Tailwind</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Styled Components</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Typescript</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-6 gap-4">
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Material UI</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Bootstrap</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Storybook</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Wordpress</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">NodeJS</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">GraphQL</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-7 gap-4">
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">MySQL</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">PostgreSQL</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">MongoDB</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Cypress</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Docker</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Git</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Photoshop</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Illustrator</p>
                            </div>
                            <div className="p-5 flex justify-center bg-slate-700 rounded-2xl">
                                <p className="text-white">Figma</p>
                            </div>
                            <p className="text-white">Em progresso...</p>
                        </div>
                        
                    </div>
                </div>
                
                <div className="flex flex-col gap-10">
                    <h2 className="text-5xl text-center font-bold text-white">Línguas</h2>
                    <div>
                        <p className="text-center text-white">Português - Nativo</p>
                        <p className="text-center text-white">Inglês - Intermediário (em progresso)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;