<?php
require_once 'PHPMailer/PHPMailerAutoload.php';

$admin_email = array();
foreach ($_POST["admin_email"] as $key => $value) {
    array_push($admin_email, $value);
}

// Передаём только первый элемент массива в переменную $admin_email
$admin_email = $admin_email[0];

$form_subject = trim($_POST["form_subject"]);

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$c = true;
$message = '';
foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "admin_email" && $key != "form_subject") {
        if (is_array($value)) {
            $val_text = '';
            foreach ($value as $val) {
                if ($val && $val != '') {
                    $val_text .= ($val_text == '') ? $val : ', ' . $val;
                }
            }
            $value = $val_text;
        }
        $message .= ($c = !$c) ? '<tr>' : '<tr>';
        $message .= "
 <td style='padding: 10px; width: auto;'><b>$key:</b></td>
 <td style='padding: 10px;width: 100%;'>$value</td>
 </tr>
      ";
    }
}
$message = "<table style='width: 50%;'>$message</table>";

// От кого
$mail->setFrom('adm@' . $_SERVER['HTTP_HOST'], 'Your best site');

// Кому
$mail->addAddress($admin_email);

// Тема письма
$mail->Subject = $form_subject;

// Тело письма
$body = $message;
$mail->msgHTML($body);

// Приложения
if ($_FILES) {
    foreach ($_FILES['file']['tmp_name'] as $key => $value) {
        $mail->addAttachment($value, $_FILES['file']['name'][$key]);
    }
}

$mail->send();
?>

