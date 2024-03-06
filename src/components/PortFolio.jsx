import React, { Component } from 'react';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';

export class PortFolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All', // Изначально выбран фильтр "All"
    };
  }

  handleFilterSelect = (filter) => {
    // Обработчик выбора фильтра
    this.setState({ selectedFilter: filter }); // Обновляем состояние выбранного фильтра
  }

  render() {
    const { filters, projects } = this.props; // Получаем свойства из props
    const { selectedFilter } = this.state; // Получаем текущий выбранный фильтр из состояния

    // Фильтруем проекты в соответствии с выбранным фильтром
    const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(project => project.category === selectedFilter);

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}
