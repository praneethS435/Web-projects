export function Todo({task,taskDate}) {
  return (
    <div>/
      <div class="container">
        <div class="row kg-row">
          <div class="col">{task}</div>
          <div class="col-6">{taskDate}</div>
          <div class="col">
            <button type="button" class="btn btn-danger kg-button">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
