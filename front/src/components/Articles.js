import React from "react";

class Articles extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="blog-title-area text-center">
                  <h3>
                    Top 10 phone applications and 2017 mobile design awards
                  </h3>
                  <div className="blog-meta big-meta">
                    <small>
                      <a href="tech-single.html" title>
                        21 July, 2017
                      </a>
                    </small>
                    <small>
                      <a href="tech-author.html" title>
                        by Jessica
                      </a>
                    </small>
                  </div>
                </div>
                {/* end meta */}

                {/* end media */}
                <div className="blog-content">
                  <div className="pp">
                    <p>
                      In lobortis pharetra mattis. Morbi nec nibh iaculis,
                      ultrices nulla. Nunc velit ante, lacinia id tincidunt
                      eget, faucibus nec nisl. In mauris purus, bibendum et
                      gravida dignissim, venenatis commodo lacus. Duis
                      consectetur quis nisi nec accumsan. Pellentesque enim
                      velit, ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum.{" "}
                    </p>
                    <h3>
                      <strong>
                        Maecenas non convallis quam, eu sodales justo.
                        Pellentesque quis lectus elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                      </strong>
                    </h3>
                    <p>
                      Donec nec metus sed leo sollicitudin ornare sed consequat
                      neque. Aliquam iaculis neque quis dui venenatis, eget
                      posuere felis viverra. Ut sit amet feugiat elit, nec
                      elementum velit. Sed eu nisl convallis, efficitur turpis
                      eu, euismod nunc. Proin neque enim, malesuada non lobortis
                      nec, facilisis et lectus. Ie consectetur. Nam eget neque
                      ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio
                      posuere.{" "}
                    </p>
                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>
                  </div>
                  {/* end pp */}
                  <img
                    src="upload/tech_menu_09.jpg"
                    alt=""
                    className="img-fluid img-fullwidth"
                  />
                  <div className="pp">
                    <h3>
                      <strong>
                        Nam non velit est. Sed lobortis arcu vitae nunc molestie
                        consectetur. Nam eget neque ac ex fringilla dignissim eu
                        ac est. Nunc et nisl vel odio posuere.{" "}
                      </strong>
                    </h3>
                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>
                    <p>
                      Morbi pharetra porta consequat. Aenean et diam sapien.
                      fames ac ante ipsum primis in faucibus. Pellentesque
                      dictum ligula iaculis, feugiat metus eu, sollicitudin ex.
                      Quisque eu ullamcorper ligula. In vel ex ac purus finibus
                      viverra. Maecenas pretium lobortis turpis. Fusce lacinia
                      nisi in tortor massa nunc.
                    </p>
                    <ul className="check">
                      <li>
                        Integer sit amet odio ac lectus imperdiet elementum.
                      </li>
                      <li>
                        Praesent vitae lacus sed lacus ullamcorper mollis.
                      </li>
                      <li>
                        Donec vitae metus ac felis vulputate tincidunt non et
                        ex.
                      </li>
                      <li>In dapibus sapien at viverra venenatis.</li>
                      <li>Pellentesque mollis velit id maximus finibus.</li>
                    </ul>
                    <p>
                      Proin ultricies nulla consectetur, sollicitudin dolor at,
                      sollicitudin mauris. Maecenas at nunc nunc. Ut nulla
                      felis, tincidunt et porttitor at, rutrum in dolor. Aenean
                      id tincidunt ligula. Donec vitae placerat odio. Mauris
                      accumsan nibh ut nunc maximus, ac auctor elit vehicula.
                      Cras leo sem, vehicula a ultricies ac, condimentum vitae
                      lectus. Sed ut eros euismod, luctus nisl eu, congue odio.{" "}
                    </p>
                    <p>
                      <img
                        src="upload/tech_menu_10.jpg"
                        className="float-left"
                        width={380}
                        alt=""
                      />
                      Suspendisse ultrices placerat dolor sed efficitur. Morbi
                      in laoreet diam. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Mauris ut massa id lectus laoreet porta non in metus.
                      Donec nibh justo, tincidunt non justo ut, tincidunt
                      malesuada turpis. Cras pellentesque sollicitudin ex eget
                      pharetra.rta non in metus. Donec nibh justo, tincidunt non
                      justo ut, tincidunt malesuada turpis. Cras pellentesque
                      sollicitudin ex eget pharetra.
                    </p>
                    <h3>
                      <strong>
                        Nam non velit est. Sed lobortis arcu vitae nunc molestie
                        consectetur. Nam eget neque ac ex fringilla dignissim eu
                        ac est. Nunc et nisl vel odio posuere.{" "}
                      </strong>
                    </h3>
                    <p>
                      Aliquam eget maximus odio. Aliquam varius nisl ut leo
                      fermentum, id fringilla magna tempus. Curabitur quis
                      bibendum lorem, ut suscipit tellus. Morbi id dictum justo,
                      et massa nunc. Mauris laoreet, neque et varius malesuada,
                      justo neque consequat dolor, sit amet semper dui ligula
                      commodo enim. Duis mauris magna, euismod in ante sed,
                      laoreet faucibus elit. Nam euismod vulputate lorem, nec
                      tincidunt lacus volutpat sit amet. In libero eros,
                      dignissim vitae quam sed, maximus consectetur justo. Donec
                      id orci eget odio convallis pellentesque. Quisque urna
                      cras amet.Vivamus non condimentum orci. Pellentesque
                      venenatis nibh sit amet est vehicula lobortis. Cras eget
                      aliquet eros. Nunc lectus elit, suscipit at nunc sed,
                      finibus imperdiet ipsum. Maecenas dapibus neque sodales
                      nulla finibus volutpat. Integer pulvinar massa vitae
                      ultrices posuere. Proin ut tempor turpis. Mauris felis
                      neque, egestas in lobortis et, sodales non ante. Ut
                      vestibulum libero quis luctus tempus. Nullam eget
                      dignissim massa. Vivamus id condimentum orci. Nunc ac sem
                      urna. Aliquam et hendrerit nisl massa nunc.{" "}
                    </p>
                    <p>
                      <img
                        src="upload/tech_menu_11.jpg"
                        className="float-right"
                        width={380}
                        alt=""
                      />
                      Suspendisse ultrices placerat dolor sed efficitur. Morbi
                      in laoreet diam. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Mauris ut massa id lectus laoreet porta non in metus.
                      Donec nibh justo, tincidunt non justo ut, tincidunt
                      malesuada turpis. Cras pellentesque sollicitudin ex eget
                      pharetra.rta non in metus. Donec nibh justo, tincidunt non
                      justo ut, tincidunt malesuada turpis. Cras pellentesque
                      sollicitudin ex eget pharetra.
                    </p>
                    <p>
                      Vivamus non condimentum orci. Pellentesque venenatis nibh
                      sit amet est vehicula lobortis. Cras eget aliquet eros.
                      Nunc lectus elit, suscipit at nunc sed, finibus imperdiet
                      ipsum. Maecenas dapibus neque sodales nulla finibus
                      volutpat. Integer pulvinar massa vitae ultrices posuere.
                      Proin ut tempor turpis. Mauris felis neque, egestas in
                      lobortis et, sodales non ante. Ut vestibulum libero quis
                      luctus tempus. Nullam eget dignissim massa. Vivamus id
                      condimentum orci. Nunc ac sem urna. Aliquam et hendrerit
                      nisl massa nunc.{" "}
                    </p>
                  </div>
                  {/* end pp */}
                </div>
                {/* end content */}

                {/* end post-sharing */}
              </div>
              {/* end title */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-spot clearfix">
                    <div className="banner-img">
                      <img
                        src="upload/banner_01.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    {/* end banner-img */}
                  </div>
                  {/* end banner */}
                </div>
                {/* end col */}
              </div>
              {/* end row */}

              {/* end col */}
              <div className="col-lg-6">
                <div className="blog-box">
                  <div className="post-media">
                    <a href="tech-single.html" title>
                      <img
                        src="upload/tech_menu_06.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="hovereffect">
                        <span className />
                      </div>
                      {/* end hover */}
                    </a>
                  </div>
                  {/* end media */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
