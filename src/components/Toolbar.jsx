export function Toolbar({filters, selected, onSelectFilter}) {

    return (
        <div className="filters-buttons">
          {filters.map(filter => (
            <button 
              key={filter} 
              onClick={() => onSelectFilter(filter)} 
              className={filter === selected ? 'active' : ''} style={{marginRight: "10px"}} 
            >
              {filter}
            </button>
          ))}
        </div>
      );
  }
