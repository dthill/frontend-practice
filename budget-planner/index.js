class BudgetPlanner {
    nrEntries = 0
    form;
    tableBody;
    totalBudget;

    constructor() {
        this.form = document.getElementById('entry-form')
        this.tableBody = document.getElementById('table-body')
        this.totalBudget = document.getElementById('total-budget')

        this.form.addEventListener('submit', this.newEntry.bind(this))
        this.tableBody.addEventListener('change', this.budgetChange.bind(this))
    }

    newEntry(event) {
        event.preventDefault()
        const formElements = event.target?.elements
        const newEntry = {
            id: this.nrEntries++,
            manager: formElements.manager.value,
            service: formElements.service.value,
            company: formElements.company.value,
            budget: formElements.budget.value
        }
        this.tableBody.insertAdjacentHTML('beforeend', `
            <tr>
                <td scope="row">${newEntry.id}</td>
                <td>${newEntry.manager}</td>
                <td>${newEntry.service}</td>
                <td>${newEntry.company}</td>
                <td>${newEntry.budget}</td>
                <td class="text-center">
                    <input type="checkbox" value="${newEntry.budget}"/>
                </td>
            </tr>
        `)
    }

    budgetChange(event) {
        if (event.target.checked) {
            this.totalBudget.innerText = parseFloat(this.totalBudget.innerText) + parseFloat(event.target.value);
        } else {
            this.totalBudget.innerText = parseFloat(this.totalBudget.innerText) - parseFloat(event.target.value);
        }
    }
}
new BudgetPlanner();