function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        
g.return('charan'); 
g.next();   