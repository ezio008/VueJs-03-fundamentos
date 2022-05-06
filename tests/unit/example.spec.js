describe('Example Component', () => {

  test('Debe de ser mayot a 10', () => {

    // Arrenge - Arreglar 
    let value = 10;

    // Act - Estímulo
    value += 2

    // Asert - Obeervar el resultado
    expect(value).toBeGreaterThan(10);

  })

})