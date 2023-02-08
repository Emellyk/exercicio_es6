"use strict";

var aluno = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Vitor',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}];
console.log(aluno);
var alunosReprovados = aluno.filter(function (notas) {
  return notas.nota >= '6';
});
console.log(alunosReprovados);