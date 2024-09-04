import DataManagementUpload from "./components/DataManagementUpload";

function DataManagementScreen() {
  return (
    <div className="mt-8 lg:mt-8">
      <h1 className="text-xl font-bold">Data Management</h1>
      {/*  */}
      <DataManagementUpload />
    </div>
  );
}

export default DataManagementScreen;
