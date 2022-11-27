import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Project from '../../components/Projects';
import ContactUs from '../../components/Contact';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import './home.styles.css';




const Home = () => {
    return (
        <Layout>
            <div>
                <Hero />
                <Services />
                <Project />
                <ContactUs />
                <Footer />
            </div>
        </Layout>
    )
}

export default Home