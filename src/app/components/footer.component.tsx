const Footer = () => {
    return (
        <>
        <footer className="bg-slate-800 px-24 w-full min-h-60 py-16 flex flex-col justify-between gap-10 xl:flex-row">
            <div className="w-full xl:w-1/2 gap-10 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-7xl font-bold">R&O</h2>
                    <p className="text-xs text-center">Blog pessoal sobre desenvolvimento web</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-10 xl:w-1/2">
                <div className="gap-4 flex flex-col items-center xl:items-start">
                    <p className="text-xs">Sobre o autor</p>
                    <h2 className="text-4xl font-bold text-center xl:text-left">Rafael Estevam de Oliveira</h2>
                    <p className="text-center xl:text-left">Engenheiro de software especializado em Front-end com mais de 7 anos de experiência.</p>
                </div>

                <div className="gap-4 flex flex-col items-center xl:items-start">
                    <p>Entre em contato</p>
                    <div className="gap-4 flex">
                        <a href="https://linkedin.com/in/rafael-estevam-de-oliveira">Linkedin</a>
                        <a href="mailto:rafael.estevamdesign@gmail.com">Email</a>
                        <a href="https://github.com/rafaelEstevam">Github</a>
                    </div>
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