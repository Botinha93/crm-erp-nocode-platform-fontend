for %%v in (*.png) do convert %%v -fill "#ffffff" -colorize 100 w-%%v
pause

