import React from 'react';
import notf from '../img/theme-content/icons/23-error.svg';
import {Helmet} from "react-helmet";

const notfound = (props) => {

  return (
  <div class="main-content-wrapper">
  <Helmet>
     <title>404 Page Not Found | Cretic Solutions</title>
    </Helmet>
	<section class="large-padding bg-grey-theme">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center mb-4 mb-md-0">
					<h2 class="page-404-title">404</h2>

					<header class="crumina-module crumina-heading align-center mb-4">
						<div class="title-text-wrap">

							<h2 class="h1 heading-title">We can’t seem to find the page you’re looking for!</h2>

						</div>

						<div class="heading-decoration"></div>

						<div class="heading-text">Sorry! The Page Is Not Found ;(
							The Link You Followed Is Probably Broken
						</div>

					</header>

					<a href="/" class="crumina-button button--dark button--l">RETURN TO HOMEPAGE</a>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-center">
					<img loading="lazy" class="crumina-icon"  src={notf} alt="404"/>
				</div>
			</div>
		</div>
	</section>
</div>
  );
}

export default notfound;