<?php


header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');
$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_subject = '';
$visitor_message = '';
$name_error = '';
$email_error = '';




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['name'])) {
        $name_error = "Name is Required!";
    } else {
        $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if (empty($_POST['email'])) {
        $email_error = "Email is Required!";
    } else {
        $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }

    if (isset($_POST['subject'])) {
        $visitor_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['message'])) {
        $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
    }
}


$results['name'] = $visitor_name;
$results['email'] = $visitor_email;
$results['subject'] = $visitor_subject;
$results['message'] = $visitor_message;
$results['name_error'] = $name_error;
$results['email-error'] = $email_error;

// prepare the email
$email_subject = 'Inquiry from Portfolio Site';
$email_recipient = 'shirinhk@hotmail.com';
$email_message = sprintf('Name: %s, Email: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);


// make sure to run code in PHP 7.4 + or you need to make $email_header as string
$email_headers = array(
    //best practice is : 'From' => 'noreply@yourdomain.com',
    //'Reply-To' => $visitor_email,
    'From' =>$visitor_email
);

//send out the email
$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);
if ($email_result) {
    $results['message'] = sprintf('WOW! Thank you for contacting me, %s. I will get back to you shortly!', $visitor_name);
} else {
    $result['message'] = sprintf('Sorry! This email did not go through. Please try again.');
}


echo json_encode($results);


