// Variable scoping and data types
//=============== Global Scope ===============
global_var = "I'm a global variable"

def modify_global():
    """Demonstrates explicit modification of a global variable using the 'global' keyword."""
    global global_var
    global_var = "Modified globally"
    print(f"Inside modify_global(): {global_var}")

def demonstrate_scope():
    """Demonstrates variable scope concepts including:
    - Function scope
    - Nested function scope
    - Nonlocal variable modification
    - Access to variables from different scopes
    """
    function_var = "I'm a function-scoped variable"
    
    def inner_function():
        """Nested function demonstrating scope access and nonlocal variable modification."""
        nested_var = "I'm a nested function variable"
        
        print("Accessing variables from different scopes:")
        print(f"  Global: {global_var}")
        print(f"  Function: {function_var}")
        print(f"  Nested: {nested_var}")
        
        nonlocal function_var
        function_var = "Modified by inner function"
    
    print("\nBefore inner_function:")
    print(f"  Function var: {function_var}")
    
    inner_function()
    
    print("\nAfter inner_function:")
    print(f"  Function var: {function_var}")

def demonstrate_data_types():
    """Demonstrates Python data types including:
    - Basic types (int, float, complex)
    - Sequence types (list, tuple, string)
    - Mapping types (dict)
    - Set types (set, frozenset)
    - Other types (bool, None)
    
    Also demonstrates mutability concepts and practical uses of immutable types.
    """
    # Numeric types
    integer_num = 42
    float_num = 3.14
    complex_num = 1 + 2j
    
    # Sequence types with mutability demonstration
    my_list = [1, "two", 3.0]
    my_tuple = (1, "two", 3.0)
    
    print("\nMutability Demonstration:")
    print("Original list:", my_list)
    my_list[0] = "Modified"
    print("Modified list:", my_list)
    
    print("\nTuple immutability:")
    print("Original tuple:", my_tuple)
    try:
        my_tuple[0] = "Modified"
    except TypeError as e:
        print(f"Attempting to modify tuple results in: {e}")
    
    # String immutability demonstration
    my_string = "Hello"
    print("\nString immutability:")
    print("Original string:", my_string)
    try:
        my_string[0] = "h"
    except TypeError as e:
        print(f"Attempting to modify string results in: {e}")
    
    # Mapping type
    my_dict = {
        "name": "John",
        "age": 30,
        "scores": [85, 92, 78]
    }
    
    # Set types with practical examples
    my_set = {1, 2, 3, 4}
    my_frozenset = frozenset([1, 2, 3, 4])
    
    # Demonstrating practical use of frozenset
    frozen_dict = {
        frozenset([1, 2]): "Group A",
        frozenset([3, 4]): "Group B"
    }
    
    # Set mutability demonstration
    print("\nSet mutability:")
    print("Original set:", my_set)
    my_set.add(5)
    print("Modified set:", my_set)
    
    try:
        my_frozenset.add(5)
    except AttributeError as e:
        print(f"Attempting to modify frozenset results in: {e}")
    
    # Boolean and None types
    is_active = True
    empty_value = None
    
    print("\nData Types Summary:")
    print("\nBasic Types:")
    print(f"  Integer: {type(integer_num)} = {integer_num}")
    print(f"  Float: {type(float_num)} = {float_num}")
    print(f"  Complex: {type(complex_num)} = {complex_num}")
    
    print("\nSequence Types:")
    print(f"  List (mutable): {type(my_list)} = {my_list}")
    print(f"  Tuple (immutable): {type(my_tuple)} = {my_tuple}")
    print(f"  String (immutable): {type(my_string)} = {my_string}")
    
    print("\nMapping and Set Types:")
    print(f"  Dictionary: {type(my_dict)} = {my_dict}")
    print(f"  Set (mutable): {type(my_set)} = {my_set}")
    print(f"  Frozenset (immutable): {type(my_frozenset)} = {my_frozenset}")
    
    print("\nFrozenset as Dictionary Key:")
    print(f"  {frozen_dict}")
    
    print("\nOther Types:")
    print(f"  Boolean: {type(is_active)} = {is_active}")
    print(f"  None: {type(empty_value)} = {empty_value}")

def main():
    """Main function to demonstrate scope and data types concepts."""
    print("============ Scope Demonstration ============")
    print(f"\nInitial global_var: {global_var}")
    
    modify_global()
    print(f"After modify_global(): {global_var}")
    
    demonstrate_scope()
    demonstrate_data_types()

if __name__ == "__main__":
    main()
