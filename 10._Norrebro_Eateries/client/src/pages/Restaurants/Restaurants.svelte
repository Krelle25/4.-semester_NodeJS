<script>

    fetch('localhost:8080/api/restaurants')
    .then((response) => response.json())
    .then((result) => console.log(result));

</script>


<h1>Restaurants</h1>