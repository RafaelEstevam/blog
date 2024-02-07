const Footer = () => {
    return (
        <>
        <footer className="bg-slate-800 px-24 w-full min-h-60 py-16 flex justify-between">
            <div className="w-1/2 gap-10 flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-7xl font-bold">ED&D</h2>
                    <p className="text-xs">Estevam Design & Desenvolvimento </p>
                </div>
                
            </div>
            <div className="w-1/2 flex flex-col gap-10">
                <div className="gap-4 flex flex-col">
                    <p className="text-xs">Sobre o autor</p>
                    <h2 className="text-4xl font-bold">Rafael Estevam de Oliveira</h2>
                    <p>Engenheiro de software especializado em Front-end com mais de 7 anos de experiência.</p>
                </div>

                <div>
                    <p>Entre em contato</p>
                    <a href="https://linkedin.com/in/rafael-estevam-de-oliveira">Linkedin</a>
                    <a href="mailto:rafael.estevamdesign@gmail.com">Email</a>
                    <a href="https://github.com/rafaelEstevam">Github</a>
                </div>
            </div>
        </footer>
        <div className="px-24 w-full py-4 flex justify-center">
            <p>Feito em: Next, Tailwind CSS, GraphQL</p>
        </div>
        </>
    );
};

export default Footer;