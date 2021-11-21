const AboutMe = () => {
    return (
        <div className='p-3'>
            <button className="btn btn-success col-12" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Sobre el desarrollador</button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Franco De Paulo - frontend developer</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Mi nombre es Franco y soy desarrollador Frontend.
                    Realicé este proyecto en React.js con el propócito de mejorar mis habilidades en Redux.
                    Si deseas contactarme, debajo te dejo mis redes sociales. Cheers! {';)'}
                    <br/>
                    <br/>
                    <div class="btn-group-vertical col-6" role="group" aria-label="Basic outlined example">
                        <a href='https://www.linkedin.com/in/franco-de-paulo-13509b186/' class="btn btn-outline-success">LinkedIn</a>
                        <a href='https://github.com/frandepe' class="btn btn-outline-success">GitHub</a>
                        <a href='https://frandepaulo.netlify.app/' class="btn btn-outline-success">Portfolio</a>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default AboutMe
