function funcionA() {
    funcionB();
}

function funcionB() {
    throw new Error("Algo salió mal");
}

funcionA();

