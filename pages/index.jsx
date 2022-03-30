import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(
        <>
        <Head>
            <title>Utilizando Components</title>
        </Head>

        <Topo/ >

        <Home titulo="teste de titulo" texto="texto inserido por props"/>

        <Home titulo="segundo home" texto="texto"/>

        <Intro titulo="objetivos" texto="objetivos da AT de INW"/>
        
        <Metas/ >
        </>
    )
}