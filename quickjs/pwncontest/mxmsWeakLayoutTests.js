function* foo(a) {
  yield () => arguments;
}

foo(10).next().value()[0];
