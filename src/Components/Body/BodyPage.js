

import React from 'react'
import './BodyPage.css'




const Body = () => {
    return ( 
       <main>
        <section className="container-fluid" >
            <img className="ImageNSV" alt="NSV" width={"160px"} src={window.location.origin + '/img/icon.png'}  />
        </section>

        <section className="main_container">
            <div>
                <h1>Research Institute Projects</h1>
            </div>

          {/*************************/
           /*       Lantern         */
           /*************************/}

              <div className="odd" >
                    <ul className="first">
                        <li><h5>Lantern</h5></li>
                        <li><p>Designed for parents,teachers and school counselors</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li>
                            <p>Have you seen behavioural changes in your child or student and want
                            to know which type of violence those behaviors might trigger?</p>
                        </li>
                    </ul>
              </div>

              {/*************************/
               /*        Athena         */
               /*************************/}

              <div className="even" >
                  <ul className="first">
                      <li><h5>Athena</h5></li>
                      <li><p>Designed for teachers, school counselors, administrators, law enforcement
                          and researchers/policy analyst.</p></li>
                      <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                  </ul>

                  <ul className="second">
                      <li>
                          <p>Discover school violence patterns. Explore how 451 school shooting communities,shooting incidents,police reports,shooter behaviors,shooter
                            medical histories, and school structures, provide reduction insight and strategies</p>
                      </li>
                  </ul>
              </div>

              {/*************************/
               /*  Covid School Rentry  */
               /*************************/}

              <div className="odd" >
                    <ul className="first">
                        <li><h5>COVID School Rentry</h5></li>
                        <li><p>Designed to prepare schools for post-COVID schoool violence</p></li>
                        <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                    </ul>

                    <ul className="second">
                        <li><p>Explore the history of children who return to school after
                        sudden emergency withdrawals and experience new levels and types of "adjustments" violence.
                        Parents and schools knowing what to expect and having good interventions
                        ready can reduce school violence</p></li>
                    </ul>
              </div>

              {/*************************/
               /*  Language of violence */
               /*************************/}

              <div className="even" >
                  <ul className="first">
                      <li><h5 className="TagLanguage">Language of Violence</h5></li>
                      <li><p>Designed to provide insights into what correlations between schools shooters
                      and violent domestic organization mean.</p></li>
                      <li><button type="button" className="btn btn-secondary">Open Tool</button></li>
                  </ul>

                  <ul className="second">
                      <li><p>Explore language patterns of 451 school shooters,including what they say,
                      how they say it , and the group language of those shooters identify with including
                      Domestic terrorists, white nationalists, and 940 hate groups (SPLC).</p></li>
                  </ul>
              </div>

        </section>
      </main>
     );
}
 
export default Body;
