import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { releases } from '../helper'
import router from 'next/router'


const Home: NextPage = () => {

  useEffect(() => {
    console.log(router.query);
  }, [])

  return (
    <Layout>
      <Head>
        <title>Nima Mahmoodi</title>
        <meta name="description" content="nima mahmoodi official website" />
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Home.module.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <section id="hero" className="hero d-grid"></section>

      <section id="videos" className="bg-dark text-light py-5">
        <div className="container py-5">
          <div className="text-center pb-5">
            <h2>Latest Videos</h2>
          </div>
          <div className="row justify-content-center">
            <iframe src="https://www.youtube.com/embed/eyhdqa1gzYE?si=FFn0D5x2kS7qN0w_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="text-center pt-5">
            <a href="https://www.youtube.com/@NimaMahmoodi" target="_blank">
              <span className="fs-3">Watch more!</span>
            </a>
          </div>
        </div>
      </section>

      <section id="releases" className="bg-dark text-light py-5">
        <div className="container py-5">
          <div className="text-center pb-5">
            <h2>Latest Releases</h2>
          </div>
          <div className="row justify-content-center">

            {
              releases.map((release, i) => (
                <div className="col-sm-4 mb-4" key={i}>
                  <img src={"/images/releases/" + release.key + ".jpeg"} alt={release.title}
                    className="p-2" />
                  <div className="p-2">
                    <h3 className="mt-3 mb-4">{release.title}</h3>
                    <div>
                      <a href={"/songs/" + release.key} className="me-4">
                        <Button size="lg" className="px-4">
                          Listen now&nbsp;&nbsp;
                          <i className="fas fa-arrow-right"></i></Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>


    </Layout>
  )
}

export default Home
