// Global variable
global_var = "I'm a global variable"

def demonstrate_scope():
    # Function scope variable
    function_var = "I'm a function-scoped variable"
    
    def inner_function():
        # Nested function scope
        nested_var = "I'm a nested function variable"
        # Accessing variables from outer scopes
        print(f"From inner_function - Global: {global_var}")
        print(f"From inner_function - Function: {function_var}")
        print(f"From inner_function - Nested: {nested_var}")
        
        # Demonstrating nonlocal
        nonlocal function_var
        function_var = "Modified by inner function"
    
    inner_function()
    print(f"\nAfter inner_function - Function var: {function_var}")
    # This would raise an error: print(nested_var)  # nested_var not accessible here

def demonstrate_data_types():
    # Numeric types
    integer_num = 42
    float_num = 3.14
    complex_num = 1 + 2j
    
    # Sequence types
    my_list = [1, "two", 3.0]  # Mutable
    my_tuple = (1, "two", 3.0)  # Immutable
    my_string = "Hello, World!"  # Immutable
    
    # Mapping type
    my_dict = {
        "name": "John",
        "age": 30,
        "scores": [85, 92, 78]
    }
    
    # Set types
    my_set = {1, 2, 3, 4}  # Unique elements, mutable
    my_frozenset = frozenset([1, 2, 3, 4])  # Immutable set
    
    # Boolean type
    is_active = True
    
    # None type
    empty_value = None
    
    # Printing type information
    print("\nData Types Demonstration:")
    print(f"Integer: {type(integer_num)} = {integer_num}")
    print(f"Float: {type(float_num)} = {float_num}")
    print(f"Complex: {type(complex_num)} = {complex_num}")
    print(f"List: {type(my_list)} = {my_list}")
    print(f"Tuple: {type(my_tuple)} = {my_tuple}")
    print(f"String: {type(my_string)} = {my_string}")
    print(f"Dictionary: {type(my_dict)} = {my_dict}")
    print(f"Set: {type(my_set)} = {my_set}")
    print(f"Frozenset: {type(my_frozenset)} = {my_frozenset}")
    print(f"Boolean: {type(is_active)} = {is_active}")
    print(f"None: {type(empty_value)} = {empty_value}")

if __name__ == "__main__":
    print("Scope Demonstration:")
    demonstrate_scope()
    demonstrate_data_types()
