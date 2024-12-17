export function Addtodo() {
  return (
    <div>
      <div class="container">
        <div class="row kg-row">
          <div class="col">
            <input type="text" placeholder="enter the task" />
          </div>
          <div class="col-6">
            <input type="date" />
          </div>
          <div class="col">
            <button type="button" class="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
