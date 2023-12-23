$(function() {
    $("body").keydown(function(event) {
        if(event.keyCode === 187) {
            $(this).append(markup);
        }
    });



});



const markup = `<ul class="row copy">
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
<li class="col span-1-of-10 light2"></li>
<li class="col span-1-of-10 light3"></li>
<li class="col span-1-of-10 light1"></li>
</ul>`;
