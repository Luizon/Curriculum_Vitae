// Quiz� no es necesario un archivo extra s�lo para activar los popover, pero la costumbre me dice que no meta programaci�n en el HTML
$(document).ready(
	function() {
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle-extra="tooltip"]').tooltip();
	}
);
