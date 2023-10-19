@extends('layouts.main')

@section('title')
    Self Help
@endsection

@section('meta')
    <meta name="description" content="Welcome to ALX Backend Elearning Portal - Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal) - Self Help"/>
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href="{{ Request::fullUrl() }}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Welcome to ALX Backend Elearning Portal | Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal) | Self Help" />
    <meta property="og:description" content="Welcome to  ALX Backend Elearning Portal | Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal) | Self Help" />
    <meta property="og:url" content="{{ Request::fullUrl() }}" />
    <meta property="og:site_name" content="ALX Backend Elearning Portal" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content="Welcome ALX Backend Elearning Portal | Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal) | Self help" />
    <meta name="twitter:title" content="Welcome to ALX Backend Elearning Portal Hub - ALX Backend Elearning Portal" />
    <meta name="twitter:site" content="@nourish_africa" />
    <meta name="twitter:creator" content="@nourish_africa" />

    <script type='application/ld+json' class='yoast-schema-graph yoast-schema-graph--main'>
    {
   "@context":"https://schema.org",
   "@graph":[
      {
         "@type":"Organization",
         "@id":"https://brace.afchub.org/#organization",
         "name":"ALX Backend Elearning Portal",
         "url":"https://brace.afchub.org/",
         "sameAs":[
            "https://www.facebook.com/nourishafrica1",
            "https://instagram.com/nourish_africa",
            "https://www.linkedin.com/company/28506256",
            "https://twitter.com/nourish_africa"
         ],
         "logo":{
            "@type":"ImageObject",
            "@id":"https://brace.afchub.org/#logo",
            "url":"https://brace.afchub.org/wp-content/uploads/2019/04/NA-1-Official.png",
            "width":848,
            "height":519,
            "caption":"ALX Backend Elearning Portal"
         },
         "image":{
            "@id":"https://brace.afchub.org/#logo"
         }
      },
      {
         "@type":"WebSite",
         "@id":"https://brace.afchub.org/#website",
         "url":"https://brace.afchub.org/",
         "name":"ALX Backend Elearning Portal",
         "description":"A home for 1 million agri-food entrepreneurs transforming Africa&#039;s agricultural",
         "publisher":{
            "@id":"https://brace.afchub.org/#organization"
         },
         "potentialAction":{
            "@type":"SearchAction",
            "target":"https://brace.afchub.org/?s={search_term_string}",
            "query-input":"required name=search_term_string"
         }
      },
      {
         "@type":"WebPage",
         "@id":"{{ Request::fullUrl() }}#webpage",
         "url":"{{ Request::fullUrl() }}",
         "inLanguage":"en-US",
         "name":"Welcome to ALX Backend Elearning Portal Hub - Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal)",
         "isPartOf":{
            "@id":"https://brace.afchub.org/#website"
         },
         "about":{
            "@id":"https://brace.afchub.org/#organization"
         },
         "datePublished":"2019-12-03T12:51:31+00:00",
         "dateModified":"2020-02-07T15:22:22+00:00",
         "description":"Building Resilience Against Climate Effects In Africa Program (ALX Backend Elearning Portal)"
      }
   ]
}
</script>

@endsection

@section('top-assets')
    <!-- style -->
    <link rel="stylesheet" href="{{ asset('leading_women/style.css') }}" />
    <style>
        .overview-p {
            font-family: 'Inter', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
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
    </style>
@endsection

@section('content')
    <section class="wow fadeIn parallax padding-six-tb padding-two-lr"
             data-stellar-background-ratio="0.5"
             style="background-image: url(&quot;{{ asset('images/banners/self-help.jpg') }}&quot;);
             visibility: visible; animation-name: fadeIn;">
        <div class="row">
            <div class="col-md-2">
                <div class="bg-white-opacity box-shadow-radius d-flex justify-content-center">
                    <h3 class="custom-font5 text-dark-red p-2">Self Help</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-two-tb">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-12">
                    <!-- start accordion -->
                    <div class="panel-group accordion-style3 text-dark" id="accordion-3">

                        <!-- start tab content -->
                        <div class="panel panel-default">
                            <div class="privacy-policy-accordion-header">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-3"
                                   href="#accordion-3-6" aria-expanded="false">
                                    <div class="panel-title">
                                    <span class=" sm-width-80 d-inline-block text-dark">
                                        400 Bad Request</span>
                                        <i class="fas float-right fa-angle-down text-dark"></i>
                                    </div>
                                </a>
                            </div>

                            <div id="accordion-3-6" class="panel-collapse collapse" data-parent="#accordion-3" style="">
                                <div class="privacy-policy-accordion-body">
                                    <p class="overview-p tx-14">
                                        If you see a 400 Bad request error, this is caused by your browser cache. See image below as example
                                    </p>
                                    <img src="{{ asset('images/400-bad-request.jpg') }}" width="200"/>

                                    <p class="overview-p tx-14">
                                        <strong>Solution:</strong><br>
                                        Solution 1: Use another browser (Chrome, Safari, Mozilla or Edge)<br>
                                        Solution 2: Use your browser in incognito mode<br>
                                        Solution 3: Delete your cookies<br><br>

                                        To learn more about deleting cookies, below are the steps<br><br>

                                        <strong>Desktop</strong><br>
                                        Mozilla | Desktop = <a class="na-text-dark-green" href="https://vimeo.com/841177548/e56d30604f">Watch Solution Online</a> <br>
                                        Chrome | Desktop = <a class="na-text-dark-green" href="https://vimeo.com/841181357/1a1dfde011">Watch Solution Online</a> <br><br>

                                        <strong>Mobile</strong><br>
                                        Mozilla<br>
                                        Go to settings -> Delete Browsing Data<br>
                                        Check only cookies and click "Delete browsing data"<br><br>

                                        Chrome<br>
                                        Go to Settings -> Privacy and Security<br>
                                        Go to Clear Browsing Data<br>
                                        Check "Cookies and Site Data"<br>
                                        Click "Clear Data"<br><br>

                                        <strong>Desktop</strong><br>
                                        Mozilla<br>
                                        Go to settings<br>
                                        Click on the "Privacy and Security" Tab<br>
                                        Click on "Manage Data"<br>
                                        On the search bar, Search for "afchub.org"<br>
                                        select it and click "remove selection"<br>
                                        Then save changes<br><br>

                                        Chrome<br>
                                        Go to Settings -> Privacy and Security<br>
                                        Click on "Third Party Cookies"<br>
                                        Click on "See all site data and permissions"<br>
                                        Search for "afchub.org", then delete
                                    </p>

                                    <p class="overview-p tx-14">
                                        If your problems persist, send us an email at <a class="na-text-dark-green" href="mailto:brace@afchub.org">brace@afchub.org</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- end tab content -->

                        <!-- start tab content -->
                        <div class="panel panel-default">
                            <div class="privacy-policy-accordion-header">
                                <a class="accordion-toggle collapsed" data-toggle="collapse"
                                   data-parent="#accordion-3" href="#accordion-3-2" aria-expanded="false">
                                    <div class="panel-title">
                                    <span class=" sm-width-80 d-inline-block text-dark">
                                        Next Course or module not unlocked or displaying after completing previous</span>
                                        <i class="fas float-right fa-angle-down text-dark"></i>
                                    </div>
                                </a>
                            </div>

                            <div id="accordion-3-2" class="panel-collapse collapse" data-parent="#accordion-3" style="">
                                <div class="privacy-policy-accordion-body">
                                    <p class="overview-p tx-14">
                                        <strong>Problem:</strong><br>
                                        If your course or module is not unlocked or displaying after completing the previous course or module, this might be a result of your browser cache.
                                    </p>
                                    <p class="overview-p tx-14">
                                        <strong>Solution:</strong><br>
                                        Clearing your cache can solve the problem.<br>
                                        For desktop hold Control + Shift + R<br>
                                        For mobile (Firefox), go to "settings" -> "Delete browsing data"<br>
                                        For mobile (Google Chrome), go to "settings" -> "Privacy and security" -> "Clear browsing data"<br>
                                    </p>
                                    <p class="overview-p tx-14">
                                        If your problems persist, send us an email at <a class="na-text-dark-green" href="mailto:brace@afchub.org">brace@afchub.org</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- end tab content -->

                    </div>
                    <!-- end tab content -->

                </div>
                <!-- end accordion -->
            </div>
        </div>
    </section>
@endsection

@section('bottom-assets')
@endsection
