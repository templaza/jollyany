<?php
/**
 * @package   Jollyany Framework
 * @author    TemPlaza https://www.templaza.com
 * @copyright Copyright (C) 2009 - 2019 TemPlaza.
 * @license https://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
 * 	DO NOT MODIFY THIS FILE DIRECTLY AS IT WILL BE OVERWRITTEN IN THE NEXT UPDATE
 *  You can easily override all files under /frontend/ folder.
 *	Just copy the file to ROOT/templates/YOURTEMPLATE/html/frontend/ folder to create and override
 */
// No direct access.
defined('_JEXEC') or die;
extract($displayData);
$template = Astroid\Framework::getTemplate();
$params = $template->getParams();
$document = Astroid\Framework::getDocument();
$language               = $params->get('language_mod', 0);
$language_module        = $params->get('language_module', 0);
if (!$language || !$language_module) {
	return;
}
?>
	<div class="jollyany-language">
		<?php echo $document->loadModule("{loadmoduleid $language_module}"); ?>
	</div>