import React, {Fragment} from 'react';
import Layout from "./UI/Layout";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import ReasonsList from "./components/reasons/ReasonsList";
import ArticleList from "./components/articles/ArticleList";
import Footer from "./components/Footer";


function App() {
    return (
        <Fragment>
            <Header/>

            <Layout>
                <Presentation/>
                <ReasonsList/>
                <ArticleList/>
            </Layout>
            <Footer/>
        </Fragment>

    );
}

export default App;
