import { Plugin, TFile, Notice } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {

		// General health check command
		this.addCommand({
			id: 'create-health-check-note',
			name: 'Create Health Check Note',
			callback: () => this.createHealthCheckNote(),
		});

		// Chiari health check command
		this.addCommand({
			id: 'create-chiari-health-check-note',
			name: 'Create Chiari Health Check Note',
			callback: () => this.createChiariHealthCheckNote(),
		});
	}

	onunload() {
		// Plugin cleanup if necessary
	}

	// Method to create the Health Check note
	async createHealthCheckNote() {
		const today = new Date();
		const yyyy = today.getFullYear();
		const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
		const dd = String(today.getDate()).padStart(2, '0');
		const formattedDate = `${yyyy}-${mm}-${dd}`;
		const fileName = `${formattedDate} Health Check.md`;

		const folderPath = 'Health Checks';
		const filePath = `${folderPath}/${fileName}`;

		try {
			// Check if the folder exists; if not, create it
			const folder = this.app.vault.getAbstractFileByPath(folderPath);
			if (!folder) {
				await this.app.vault.createFolder(folderPath);
			}

			// Create the new note with initial content
			await this.app.vault.create(filePath, `# Health Check for ${formattedDate}\n\n- [ ] Feeling good\n- [ ] Exercise completed\n- [ ] Meditated\n- [ ] Other notes...`);

			// Retrieve the created file
			const file = this.app.vault.getAbstractFileByPath(filePath);

			// Ensure 'file' is of type 'TFile' before opening
			if (file && file instanceof TFile) {
				this.app.workspace.getLeaf(true).openFile(file);
				new Notice(`Health Check note created: ${fileName}`);
			}
		} catch (error) {
			console.error('Error creating Health Check note:', error);
			new Notice('Failed to create Health Check note.');
		}
	}

	// Method to create the Health Check note
	async createChiariHealthCheckNote() {
		const today = new Date();
		const yyyy = today.getFullYear();
		const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
		const dd = String(today.getDate()).padStart(2, '0');
		const formattedDate = `${yyyy}-${mm}-${dd}`;
		const fileName = `(${formattedDate})'s Chiari Check.md`;

		const folderPath = 'Chiari Checks';
		const filePath = `${folderPath}/${fileName}`;

		try {
			// Check if the folder exists; if not, create it
			const folder = this.app.vault.getAbstractFileByPath(folderPath);
			if (!folder) {
				await this.app.vault.createFolder(folderPath);
			}

			// Check if log file exists
			const logFilePath = `${folderPath}/-log.md`;
			const logFile = this.app.vault.getAbstractFileByPath(logFilePath);
			if (!logFile) {
				await this.app.vault.create(logFilePath, `Log of Chiari Checks:`);
			} else {
				const logContent = await this.app.vault.cachedRead(logFile as TFile);
				await this.app.vault.modify(logFile as TFile, `${logContent}\n- [[${fileName}]]\n`);
			}

			// Create the new note with initial content
			await this.app.vault.create(filePath, `What level is the pain you feel (1-10)? \n- \n\n Where is the pain localized? \n- \n\n Have you taken any meds for the pain? \n- \n\n
				Any additional notes... \n - \n - \n -`);
				
			// Retrieve the created file
			const file = this.app.vault.getAbstractFileByPath(filePath);

			// Ensure 'file' is of type 'TFile' before opening
			if (file && file instanceof TFile) {
				this.app.workspace.getLeaf(true).openFile(file);
				new Notice(`Chiari Health Check note created: ${fileName}`);
			}
		} catch (error) {
			console.error('Error creating Chiari Health Check note:', error);
			new Notice('Failed to create Chiari Health Check note.');
		}
	}
}
