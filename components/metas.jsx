import Artigos from "./artigos";

export default function Metas(){
    return(
        <>
        <section id="metas" className="grid-one main-bg section">
            <div className="main-content grid-one-content">
                <h2 className="grid-main-heading">Metas</h2>
                <div className="grid">
                    <Artigos texto="Guilherme"></Artigos>
                    <Artigos texto="Rayra"></Artigos>
                    <Artigos texto="Gabriel"></Artigos>
                    <Artigos texto="AAAAAAAAAAAAAAAAAAAAAAAAA"></Artigos>
                </div>
            </div>

        </section>
        </>
    )
}