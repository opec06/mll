<?php
header('Content-Type: text/plain');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = filter_var(trim($_POST["fullname"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($fullname) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    $recipient = "customerservice@microleasingltd.com";
    $subject = "New Contact Form Submission";
    $email_content = "Full Name: $fullname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $fullname <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed. Please use the form to submit your data.";
}
?>
