// 2.73

/*
a. Here, we were able abstract out make_sum and make_product into a single data-directed implementation that looks up the the appropirate function based on an operator and calls the operands and variable with that function. 
is_number and is_variable don't work because they don't follow the same call signature as make_sum and make_product -- in other words, they're not functions that take operands perform an operation on them
*/

// b., c.
function operator(exp) {
  return head(exp);
}
function operands(exp) {
  return tail(exp);
}
function deriv() {}
function head() {}
function tail() {}
function get() {}
function put() {}

function install_deriv_package() {
  function make_sum(operands, variable) {
    return deriv(head(operands), variable) + deriv(tail(operands), variable);
  }

  function make_product(operands, variable) {
    return make_sum(
      head(operands) * deriv(tail(operands), variable),
      tail(operands) * deriv(head(operands), variable)
    );
  }

  function make_exponent(operands, variable) {}

  put("deriv", "+", make_sum);
  put("deriv", "*", make_product);
  put("deriv", "^", make_exponent);
}

// d. Presumably you'd just update the put function?

// 2.74

// a.
function install_get_record_package() {
  function division_a(employee_name, file) {
    // ...
  }

  function division_b(employee_name, file) {}

  put("get_record", "a", division_a);
  put("get_record", "b", division_b);
}

function get_record(employee_name, division, file) {
  return get("get_record", division)(employee_name, file);
}

// We need name for the record, but other than that, each division's get record function can work however it needs to, and the files can be structured however

// b.
// functions that extract a salary from a record
function install_get_salary_package() {
  function division_a(record) {
    // ...
  }

  function division_b(record) {}

  put("get_salary", "a", division_a);
  put("get_salary", "b", division_b);
}

function get_salary(employee_name, division) {
  return get("get_salary", division)(get("get_record", division)(employee_name));
}

// c.
function find_employee_record(employee_name, division, all_files) {
  const record = get("get_record", division)(employee_name, head("all_files"));
  if (record === null) {
    return find_employee_record(employee_name, division, tail(all_files));
  }

  return record;
}

// d.
// Simply update the install_package functions
