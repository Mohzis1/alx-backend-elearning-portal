<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        .certificate-bg{
            margin: 0 auto;
            width: 700px;
            height: 722px;
            background-image:  url({{ $certificate_image }});
        }

        .certificate-name{
            position: absolute;
            top: 37%;
            font-family: "Inter Semi Bold";
            font-weight: normal;
            font-size: 40px;
            margin: 0 auto;
            width: inherit;
            text-align: center;
        }

        .certificate-date{
            position: absolute;
            top: 60%;
            left: 25%;
            font-size: 14px;
            font-family: monospace, sans-serif;
            margin: 0 auto;
            width: inherit;
            text-align: center;
        }

        .certificate-id{
            position: absolute;
            top: 65.50%;
            left: 32%;
            font-size: 15px;
            font-family: monospace, sans-serif;
        }
    </style>
</head>
<body>
<div class="certificate-bg">
    <h4 class="certificate-name">{{ $name }}</h4>
    <h4 class="certificate-date">{{ $current_date }}</h4>
    <p class="certificate-id"><strong>Reference:</strong> {{ $certificate_reference }}</p>
</div>
</body>
</html>
