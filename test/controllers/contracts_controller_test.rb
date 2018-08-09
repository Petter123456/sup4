require 'test_helper'

class ContractsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contract = contracts(:one)
  end

  test "should get index" do
    get contracts_url
    assert_response :success
  end

  test "should get new" do
    get new_contract_url
    assert_response :success
  end

  test "should create contract" do
    assert_difference('Contract.count') do
      post contracts_url, params: { contract: { city: @contract.city, end_date: @contract.end_date, experiance: @contract.experiance, order_spec_id: @contract.order_spec_id, percentage: @contract.percentage, position: @contract.position, product_area: @contract.product_area, salary: @contract.salary, start_date: @contract.start_date, supplier: @contract.supplier, supplier_id: @contract.supplier_id, supplier_name: @contract.supplier_name, supplier_price: @contract.supplier_price, type_of_service: @contract.type_of_service, user_id: @contract.user_id } }
    end

    assert_redirected_to contract_url(Contract.last)
  end

  test "should show contract" do
    get contract_url(@contract)
    assert_response :success
  end

  test "should get edit" do
    get edit_contract_url(@contract)
    assert_response :success
  end

  test "should update contract" do
    patch contract_url(@contract), params: { contract: { city: @contract.city, end_date: @contract.end_date, experiance: @contract.experiance, order_spec_id: @contract.order_spec_id, percentage: @contract.percentage, position: @contract.position, product_area: @contract.product_area, salary: @contract.salary, start_date: @contract.start_date, supplier: @contract.supplier, supplier_id: @contract.supplier_id, supplier_name: @contract.supplier_name, supplier_price: @contract.supplier_price, type_of_service: @contract.type_of_service, user_id: @contract.user_id } }
    assert_redirected_to contract_url(@contract)
  end

  test "should destroy contract" do
    assert_difference('Contract.count', -1) do
      delete contract_url(@contract)
    end

    assert_redirected_to contracts_url
  end
end
