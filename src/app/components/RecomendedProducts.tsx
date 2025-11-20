const RecomendedProducts = async () => {
  // simulate slow API for testing
  await new Promise(resolve => setTimeout(resolve, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const recommendedProducts = await res.json();

  return (
    <div>
      Recommended Products: {recommendedProducts.length}
    </div>
  );
};

export default RecomendedProducts;
