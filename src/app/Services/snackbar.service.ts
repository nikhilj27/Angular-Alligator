import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 100000;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  actionButtonLabel: string = "✔";

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this._snackBar.open(
      message,
      this.action ? this.actionButtonLabel : undefined,
      config
    );
  }
}
