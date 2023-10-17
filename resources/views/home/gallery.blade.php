@extends('layouts.main')

@section('title')
    Overview
@endsection

@section('meta')

@endsection

@section('top-assets')
    <!-- style -->
    <link rel="stylesheet" href="{{ asset('leading_women/style.css') }}" />
    <style>
        .hero-h2 {
            font-family: 'Montserrat', serif;
            font-size: 40px;
            font-weight: 600;
            letter-spacing: 0em;
            text-align: left;
            color: #780101;
            line-height: 48px;
        }

        .hero-p {
            font-family: 'Inter', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
        }

        .overview-text {
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
        }

        .overview-p {
            font-family: 'Inter', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
        }

        .objectives-text {
            font-family: 'Inter', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
        }

        .trainer-card {
            border: 1px solid #006600;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
        }

        .faq-h1{
            font-family: 'Montserrat', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            color: #780101;
        }

        .privacy-policy-accordion-header {
            background: #FFFFFF;
            border: 1px solid #006600;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            color: #333333;
            padding: 18px 28px 19px;
        }

        body{
            font-family: 'Inter', serif;
            font-style: normal;
        }
        @media (max-width:480px){ /* smartphones, iPhone, portrait 480x320 phones  */

            .hero-card{
                padding-left: 20px;
                padding-right: 20px;
            }
            .hero-h2{
                font-size: 24px;
                line-height: 29px;
                padding-left: 0px!important;
                padding-top: 10px
            }
            .hero-parent-div{
                padding-left: 0px!important;
            }
            .hero-p {
                padding-left: 0px!important;
            }
            .btn-dual{
                float: left!important;
                padding-left: 0px!important;
            }

            .hero-height{
                height: 70vh!important;
            }
            .display-none-mobile{
                display: none;
            }
            .display-none-pc{
                display: block!important;
            }
            .overview-mobile-margin{
                margin-top: 180px;
            }
            .trainer-card{
                margin-right: 0px!important;
                margin-bottom: 20px;
            }
            .trainer-div{
                padding: 10px;
            }
            .objective-video{
                width:93vw !important;
                height:475px;
            }

        }
        .button-brand-color {

            border-radius: 5px;
        }
        .hero-height{
            height: 100vh;
        }
        .display-none-pc{
            display: none;
        }

        .objective-video{
            width:648px;
            height:475px;
        }
        .tablet_margin{
            margin-top:-400px;
        }
        @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
            .tablet_margin{
                margin-top:-200px;
            }

        }
    </style>
@endsection

@section('content')
    <section class="wow fadeIn parallax padding-ten-tb"
        data-stellar-background-ratio="0.5"
        style="background-image: url(&quot;{{ asset('/images/workshop/4.jpg') }}&quot;);
         visibility: visible; animation-name: fadeIn;">
        <div class="opacity-medium bg-extra-dark-gray"></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4 class="text-white custom-font2 text-left font-weight-500 letter-spacing-minus-1 text-center"
                        style="margin-bottom: 0;">Past Related Activity</h4>
                </div>
            </div>
        </div>
    </section>

    <section class="wow fadeIn padding-20px-tb border-bottom bg-brand-color"
             style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 breadcrumb alt-font text-medium">
                    <!-- breadcrumb -->
                    <ul>
                        <li><a href="{{ url('/') }}" class="text-light">Overview</a></li>
                        <li class="text-light">Gallery</li>
                    </ul>
                    <!-- end breadcrumb -->
                </div>
            </div>
        </div>
    </section>

    <section class="padding-four-tb">
        <div class="container-fluid margin-four-bottom">

            <div class="row justify-content-center">
                <div class="col-12 col-lg-7 text-center">
                    <div class="position-relative overflow-hidden w-100">
                        <h1 class="overview-text text-center">Gallery</h1>
                    </div>
                </div>
            </div>

            <div class="row zoom-gallery">
                <ul class="portfolio-grid work-4col hover-option2 gutter-small w-100">
                    <li class="grid-sizer"></li>
                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp">
                        <a href="{{ asset('images/workshop/1.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/1.png') }}" alt="" class="project-img-gallery"/>
                                </div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->
                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="0.2s">
                        <a href="{{ asset('images/workshop/2.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/2.png') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->
                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="0.4s">
                        <a href="{{ asset('images/workshop/3.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/3.png') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->
                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="0.6s">
                        <a href="{{ asset('images/workshop/4.jpg') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/4.jpg') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->
                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="0.8s">
                        <a href="{{ asset('images/workshop/5.jpg') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/5.jpg') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->

                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="1s">
                        <a href="{{ asset('images/workshop/6.jpg') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/6.jpg') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->

                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="1s">
                        <a href="{{ asset('images/workshop/7.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/7.png') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->

                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="1s">
                        <a href="{{ asset('images/workshop/8.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/8.png') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->

                    <!-- start image gallery item -->
                    <li class="grid-item wow fadeInUp" data-wow-delay="1s">
                        <a href="{{ asset('images/workshop/9.png') }}"  title="Lightbox gallery image title...">
                            <figure>
                                <div class="portfolio-img bg-extra-dark-gray">
                                    <img src="{{ asset('images/workshop/9.png') }}" alt="" class="project-img-gallery"/></div>
                                <figcaption>
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box vertical-align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <!-- end image gallery item -->

                </ul>
            </div>
        </div>

        <div class="container-fluid">

            <div class="row margin-five-bottom">
                <div class="col-12">
                    <h1 class="overview-text text-center">Documentaries</h1>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/zevF8EDCp4g"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/jnHOtyoJ3Og"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/k5mlaNfYBkc"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/7OYHTDxeKBM"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>

            <div class="row margin-five-bottom">
                <div class="col-12">
                    <h1 class="overview-text text-center">Interviews</h1>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/_Y4kf4GLNiM"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/CI6PQ73hUcc"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/1EJkQaw5chs"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/lsCVOuOloE4"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/Y4Hp4GVfoPg"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="col-md-4 p-2">
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/qy9vIvvD1l0"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    </section>
@endsection

@section('bottom-assets')
@endsection
