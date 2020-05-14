// Quizá no es necesario un archivo extra sólo para activar los popover, pero la costumbre me dice que no meta programación en el HTML
$(document).ready(
	function() {
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle-extra="tooltip"]').tooltip();
	}
);
