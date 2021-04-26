const a = () => console.log('a');
const b = () => setTimeout(() => console.log('b'), 100);
const c = () => console.log('c');

a();
b();
c();