#CheckRadioList
Funcionalidad de campos radio buttoms y checkboxes con diseño de lista utilizado estilos de bootstrap.
Radio buttoms and checkboxes as a list using bootstrap design.

## Dependencies
* jQuery
* Bootstrap

## Usage
* Add jQuery js and css files
* Add bootstrap js and css files
* Add js ```<script src="js/dist/checkradiolist.min.js"></script>```

### Example

    <ul class="list-group list-edu radio-list">
        <li class="list-group-item"><input type="radio" name="radio_1"/>opction 1</li>
        <li class="list-group-item"><input type="radio" name="radio_1"/>opction 2</li>
        <li class="list-group-item"><input type="radio" name="radio_1"/>opction 3</li>
    </ul>

    <ul class="list-group list-edu checkbox-list">
        <li class="list-group-item"><input type="checkbox" name="checkbox_1"/>opction 1</li>
        <li class="list-group-item"><input type="checkbox" name="checkbox_1"/>opction 2</li>
        <li class="list-group-item"><input type="checkbox" name="checkbox_1"/>opction 3</li>
    </ul>

    <script languaje="javascript">
		$(document).ready(function() {
            $('.radio-list').radioList();
            $('.checkbox-list').checkboxList();
		});
	</script>
