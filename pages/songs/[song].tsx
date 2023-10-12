import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { releases } from '../../helper'
import { useRouter } from 'next/router';


const Song: NextPage = () => {

  const router = useRouter()
  console.log("router", router.query.song)
  const r = releases.filter((release => release.key === router.query.song))
  let release: any = {}
  if (r.length > 0)
    release = r[0]


  return (
    <Layout>
      <Head>
        <title>Nima Mahmoodi - {release.title}</title>
        <meta name="description" content={"nima mahmoodi - " + release.title} />
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Home.module.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <section id="releases" className="bg-dark text-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center">

            <div className="col-sm-5 mb-4">
              <img src={"/images/releases/" + release.key + ".jpeg"} alt={release.title}
                className="p-2" />

            </div>
            <div className="col-sm-5 mb-4">
              <div className="p-2">
                <h3 className="mt-3">{release.title}</h3>
                <h5>Listen on:</h5>
                <div className="row text-center">
                  {
                    release.links?.map((rel: any, i: any) => (
                      <div className="col-sm-2 col-4" key={i}>
                        <div className="py-3">
                          <a href={rel.link} target="_blank">
                            <OverlayTrigger placement="bottom" overlay={(
                              <Tooltip id="tooltip">
                                <span>{rel.title}</span>
                              </Tooltip>
                            )}>
                              <img src={"/images/social/" + rel.title + "-white.png"}
                                alt={"nima mahmoodi " + rel.title} />
                              {/* <span>{rel.title}</span> */}
                            </OverlayTrigger>
                          </a>
                        </div>
                      </div>
                    ))
                  }
                  <div className="col12 text-start">
                    <h5>Lyrics:</h5>
                  </div>
                  <div className="col12 text-start" dangerouslySetInnerHTML={{ __html: `<code>${release.text}</code>` }}>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </Layout>
  )
}

export default Song
