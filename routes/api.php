<?php

use Pcode\SearchableDropdown\Http\Controllers\SearchableDropdownController;

Route::get('/{resource}', SearchableDropdownController::class."@index");
